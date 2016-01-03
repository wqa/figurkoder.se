var host = "www.figurkoder.se"

if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https"
