.PHONY: upload test clean

upload:
	zip upload_me.zip *.html *.js

test:
	python -m http.server

clean:
	rm upload_me.zip

