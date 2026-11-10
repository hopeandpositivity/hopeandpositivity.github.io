---
layout: default
title: "Hope & Positivity"
permalink: /
---

<div class="home-hero">
  <p class="eyebrow">আশা · ইতিবাচকতা · ব্যক্তিগত উন্নতি</p>
  <h1>প্রতিদিনের জীবনে খুঁজে নিন নতুন অনুপ্রেরণা</h1>
  <p class="hero-copy">অনুপ্রেরণামূলক গল্প, ইতিবাচক ভাবনা ও ব্যক্তিগত উন্নতির লেখার মাধ্যমে এগিয়ে চলুন আশা, উদ্দেশ্য ও আত্মবিশ্বাস নিয়ে।</p>
  <a class="hero-link" href="#recent-stories">সাম্প্রতিক গল্পগুলো পড়ুন <span aria-hidden="true">↓</span></a>
</div>

{% assign featured_post = site.posts.first %}
{% if featured_post %}
<section class="featured-section" aria-labelledby="featured-heading">
  <div class="section-heading"><p class="eyebrow">সম্পাদকের পছন্দ</p><h2 id="featured-heading">বিশেষ গল্প</h2></div>
  <article class="featured-card">
    <div class="featured-art" aria-hidden="true"><span>✦</span><span>☀</span><span>✦</span></div>
    <div class="featured-copy"><p class="featured-tag">এই সপ্তাহের অনুপ্রেরণা</p><h3><a href="{{ featured_post.url | relative_url }}">{{ featured_post.title }}</a></h3><p>{{ featured_post.excerpt | strip_html | strip | truncate: 220 }}</p><a class="text-link" href="{{ featured_post.url | relative_url }}">গল্পটি পড়ুন <span aria-hidden="true">→</span></a></div>
  </article>
</section>
{% endif %}

<div class="ad-container" aria-label="বিজ্ঞাপন"><span class="ad-label">বিজ্ঞাপন</span><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1195424296838471" data-ad-slot="7058155839" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

<div class="section-heading" id="recent-stories"><p class="eyebrow">পড়ুন ও অনুপ্রাণিত হোন</p><h2>সাম্প্রতিক গল্প</h2></div>
{% assign recent_posts = site.posts | slice: 0, 10 %}
{% if recent_posts.size > 0 %}
<ul class="story-list">
{% for post in recent_posts %}
  <li class="story-card"><a href="{{ post.url | relative_url }}"><span class="story-title">{{ post.title }}</span><span class="story-arrow" aria-hidden="true">→</span></a><p>{{ post.excerpt | strip_html | strip | truncate: 150 }}</p></li>
{% endfor %}
</ul>
{% else %}<p class="empty-state">নতুন গল্প শিগগিরই প্রকাশিত হবে।</p>{% endif %}

<div class="home-links"><a href="{{ '/about/' | relative_url }}">আমাদের সম্পর্কে</a><a href="{{ '/contact/' | relative_url }}">যোগাযোগ করুন</a></div>
<p class="site-motto">Choose Hope. Share Positivity. Inspire Growth.</p>
