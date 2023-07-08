.PHONY: upload test clean

upload:
	zip upload_me.zip *.html *.js
	./butler push upload_me.zip hamiltoniandynamics/captcha-draft:html

test:
	python -m http.server

clean:
	rm upload_me.zip

