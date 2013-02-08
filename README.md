# remoteStorage.locations

This module stores [GeoJSON](http://www.geojson.org/geojson-spec.html) Features and Feature Collections.

## Usage

index.html:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- from somewhere (needed to generate IDs): -->
    <script src="Math.uuid.js"></script>
    <!-- from remoteStorage.js: -->
    <script src="remoteStorage.min.js"></script>
    <!-- from remoteStorage.locations: -->
    <script src="locations.js"></script>

    <!-- the script below -->
    <script src="app.js"></script>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

app.js:

```javascript
// claim read-write access to 'locations'
remoteStorage.claimAccess('locations', 'rw').
  then(function() {
    // initialize 'locations' module
    remoteStorage.locations.init();
    // display widget
    remoteStorage.displayWidget();
  });
```

### Adding a Collection

```javascript
remoteStorage.locations.addCollection('my-collection').
  then(function() {
    console.log('collection created!');
  });
```

### Removing a Collection

```javascript
remoteStorage.locations.removeCollection('my-collection').
  then(function() {
    console.log('collection removed!');
  });
```

### Getting a Collection, managing Features

```javascript
remoteStorage.locations.getCollection('my-collection').
  then(function(collection) {
    // the collection will be yielded, no matter if it existed before.
    // as soon as a feature is added, the collection would be created.

    // Features can be listed ...
    collection.getFeatures().
      then(function(features) {
        console.log("Features: ", JSON.stringify(features));
      });

    // ... and added
    collection.addFeature({
      // 'type' and 'id' for the feature will be added automatically, like:
      //type: 'Feature',
      //id: Math.uuid(),
      geometry: {
        type: 'Point',
        coordinates: [-150.08093299249254, 0.3955046715318032]
      },
      properties: {
        title: 'Water',
        description: 'Marks location of some water.'
      }
    });

  });
```

### Events

The following events are emitted by remoteStorage.locations:

* `add-collection`
* `remove-collection`
* `update-collection`
* `add-feature`
* `remove-feature`
* `update-feature`

All these events yield an 'event' object like the one described [here in the remoteStorage.js documentation](http://remotestoragejs.com/doc/code/files/lib/baseClient-js.html#BaseClient.change).

## Contributing

If you have any suggestions, questions or additions, please open up an issue, fork the project & send pull requests and / or drop by our IRC channel **#remotestorage** on **irc.freenode.org**.

