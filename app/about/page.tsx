import React from "react";

export default function AboutPage() {
  return (
    <div className="py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Music Blog에 오신 것을 환영합니다!</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        최신 음악 트렌드, 다양한 장르의 리뷰, 음악 추천과 감상, 음악과 함께하는 일상을 공유하는 공간입니다.<br/>
        음악을 사랑하는 모든 분들과 소통하고 싶어요!<br/>
        K-POP, POP, ROCK, JAZZ, CLASSIC, 힙합/랩 등 다양한 음악 이야기를 만나보세요.
      </p>
      <div className="text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold">🎶 음악과 함께하는 블로그</span>
      </div>
    </div>
  );
} 