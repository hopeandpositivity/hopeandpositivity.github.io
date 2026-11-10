---
layout: default
title: "Hope & Positivity"
permalink: /
---

## আশা ও ইতিবাচকতার গল্পে স্বাগতম

অনুপ্রেরণামূলক গল্প, ইতিবাচক ভাবনা ও ব্যক্তিগত উন্নতির লেখার মাধ্যমে প্রেরণা খুঁজুন।

<div style="max-width: 970px; width: 100%; margin: 24px auto; text-align: center;">
  <!-- Test 001 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-1195424296838471"
       data-ad-slot="7058155839"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>

## সাম্প্রতিক গল্প

{% assign recent_posts = site.posts | slice: 0, 10 %}
{% if recent_posts.size > 0 %}
{% for post in recent_posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
নতুন গল্প শিগগিরই প্রকাশিত হবে।
{% endif %}

[আমাদের সম্পর্কে]({{ '/about/' | relative_url }}) · [যোগাযোগ করুন]({{ '/contact/' | relative_url }})

*Choose Hope. Share Positivity. Inspire Growth*
