"use strict";

var Note = require("@lyre/note");

class Scale {
    constructor(root) {
        this.root = root;
    }
    
    getNote(n) {
        return this.root.getTransposition(this.definition[n-1]);
    }
    
    setDefinition(definition) {
        this.definition = definition;
    }
}

module.exports = Scale;