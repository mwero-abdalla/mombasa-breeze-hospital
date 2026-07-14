"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Filter, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";

const explicitCategories = [
  "Women's Health",
  "Child Health",
  "Diabetes",
  "Hypertension",
  "Nutrition",
  "Mental Health",
];

const dataCategories = blogPosts.map((p) => p.category);
const merged = [...new Set([...explicitCategories, ...dataCategories])];
const allCategories = ["All", ...merged.sort()];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            activeFilter.toLowerCase().includes(post.category.toLowerCase()),
        );

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-primary-foreground/30 text-primary-foreground/80 text-xs tracking-wider uppercase"
          >
            Health Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Health Blog &amp; Resources
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Expert health advice, tips, and resources from our medical team to
            help you live a healthier life.
          </p>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <section className="py-10 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="text-sm font-medium text-foreground">
              Filter by Category
            </span>
            <Search className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin -mx-4 px-4">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="cursor-pointer shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted text-muted-foreground mb-4">
                    <Search className="h-6 w-6" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    No articles found in &ldquo;{activeFilter}&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    Try selecting a different category.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 cursor-pointer"
                    onClick={() => setActiveFilter("All")}
                  >
                    View All Articles
                  </Button>
                </motion.div>
              ) : (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="card-hover overflow-hidden h-full flex flex-col border border-border/60">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        <span className="absolute bottom-3 right-3 text-white/90 text-xs font-mono">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <CardContent className="p-5 space-y-3 flex-1 flex flex-col">
                        <Badge variant="secondary" className="w-fit">
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-semibold leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                          <span className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 shrink-0" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 shrink-0" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <Link href="#" className="mt-1">
                          <Button
                            variant="link"
                            className="cursor-pointer gap-1.5 h-auto p-0 text-primary"
                          >
                            Read More <ArrowRight className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
