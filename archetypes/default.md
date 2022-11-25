---
bannerTitle: "bucket" 
title: {{ .Name }}
written: {{ .Date | time.Format "Jan 2006" }}
type: hk/bucket
aliases: ['/bucket/{{ replace .Name "-" " " }}/']
images:
- path: /images/
---

