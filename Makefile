NODE := node


remoteStorage.locations.js: tmp/schemas.js src/locations.js
	$(NODE) build/wrap-combine.js $@ tmp/schemas.js src/locations.js

tmp/schemas.js: schema/*.json
	mkdir -p tmp/
	$(NODE) build/compile-schemas.js $@ schema/*.json

clean:
	rm -rf tmp/
	rm -f remoteStorage.locations.js
