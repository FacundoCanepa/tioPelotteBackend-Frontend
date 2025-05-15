"use client";
import { googleReviews } from "../types/comments";
import { Star } from "lucide-react";

const CommentsUser = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-garamond italic mb-8">
        Opiniones de nuestros clientes
      </h2>
      <div className="space-y-6">
        {googleReviews.map((review, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm"
          >
            <img
              src={ `${process.env.NEXT_PUBLIC_BACKEND_URL}${review.avatar}`}
              alt={review.name}
              className="w-12 h-12  rounded-full object-cover border-2 border-yellow-300"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-bold text-stone-700">{review.name}</p>
                <span className="text-xs text-stone-500">{review.date}</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
                ))}
              </div>
              <p className="text-sm text-stone-700 font-medium italic">
                "{review.comment}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsUser;
