var URL=window.location.href,separaURL=URL.split(":"),havaliaURL=separaURL[1],URLLimpa=havaliaURL.replace("//","");"localhost"==URLLimpa?($("#footer").load("http://localhost:3000/footer"),$("#banner").load("http://localhost:3000/banner"),$("#menu").load("http://localhost:3000/menu")):($("#footer").load("http://melhoridade.herokuapp.com/footer"),$("#banner").load("http://melhoridade.herokuapp.com/banner"),$("#menu").load("http://melhoridade.herokuapp.com/menu"));