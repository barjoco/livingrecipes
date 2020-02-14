package main

import (
	"fmt"
	"html/template"
	"net/http"
	"utils"
	"utils/requrl"
)

const (
	port = ":8089"
)

var (
	thisDir   = utils.GetThisDir()
	staticDir = thisDir + "/data/static"
	htmlDir   = staticDir + "/html"
)

func main() {
	templates := template.Must(template.ParseGlob(htmlDir + "/*.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		req := requrl.New(r)
		if req.Ext == ".html" {
			http.Redirect(w, r, req.SansExt, http.StatusSeeOther)
		} else if req.Ext == "" {
			if req.Path == "/" {
				templates.ExecuteTemplate(w, "index.html", nil)
			} else {
				templates.ExecuteTemplate(w, req.File+".html", nil)
			}
		} else {
			http.ServeFile(w, r, staticDir+req.Path)
		}
	})

	fmt.Printf("Site running on %s...\n", port)
	http.ListenAndServe(port, nil)
}
