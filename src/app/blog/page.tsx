"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Filter, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";

const categories = [
  "All",
  "Women's Health",
  "Child Health",
  "Diabetes",
  "Hypertension",
  "Nutrition",
  "Mental Health",
];

const categoryGradients: Record<string, string> = {
  "Women's Health": "from-pink-400 to-rose-500",
  "Child Health": "from-green-400 to-emerald-500",
  Diabetes: "from-blue-400 to-indigo-500",
  Hypertension: "from-red-400 to-orange-500",
  Nutrition: "from-yellow-400 to-orange-400",
  "Mental Health": "from-purple-400 to-violet-500",
};

function getPlaceholderGradient(category: string) {
  for (const [key, gradient] of Object.entries(categoryGradients)) {
    if (category.includes(key) || key.includes(category)) {
      return gradient;
    }
  }
  return "from-teal-400 to-cyan-500";
}

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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Health Blog &amp; Resources
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Expert health advice, tips, and resources from our medical team
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="cursor-pointer"
              >
                {category}
              </Button>
            ))}
          </div>

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
                <div className="col-span-full text-center py-16 text-muted-foreground">
                  No articles found in this category.
                </div>
              ) : (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col">
                      <div
                        className={`flex items-center justify-center h-48 bg-gradient-to-br ${getPlaceholderGradient(post.category)}`}
                      >
                        <span className="text-white/30 text-6xl font-bold italic">
                          {post.category.charAt(0)}
                        </span>
                      </div>
                      <CardContent className="p-5 space-y-3 flex-1 flex flex-col">
                        <Badge variant="secondary" className="w-fit">
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-semibold leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                          <span className="flex items-center gap-1">
                            <User className="h-3.5 w-3.5" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
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
