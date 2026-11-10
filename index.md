---
layout: default
title: "Hope & Positivity"
permalink: /
---

## আশা ও ইতিবাচকতার গল্পে স্বাগতম

অনুপ্রেরণামূলক গল্প, ইতিবাচক ভাবনা ও ব্যক্তিগত উন্নতির লেখার মাধ্যমে প্রতিদিনের জীবনে আশা ও আত্মবিশ্বাস খুঁজে নিন।

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

*Choose Hope. Share Positivity. Inspire Growth.*
