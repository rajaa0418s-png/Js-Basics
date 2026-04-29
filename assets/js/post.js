const slug=new URLSearchParams(location.search).get('slug');
fetch('data/blog.json').then(r=>r.json()).then(posts=>{const p=posts.find(x=>x.slug===slug)||posts[0];document.getElementById('post').innerHTML=`<h1>${p.title}</h1><p>${p.date}</p><p>${p.content}</p><p><a class='btn' href='blog.html'>Back to blog</a></p>`})
