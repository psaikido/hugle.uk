---
bannerTitle: "bucket" 
title: {{ .Name }}
written: {{ .Date | time.Format ":date_long" }}
type: hk/bucket
aliases: ['/bucket/{{ replace .Name "-" " " }}/']
images:
- path: /images/
---

