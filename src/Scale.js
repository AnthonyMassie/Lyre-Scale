"use strict";

var Note = require("@lyre/note");

/**
 * The class defines a scale and is able to perform operations such as scale
 * transposition.
 */
class Scale {
    constructor(root) {
        this.root = root;
    }
    
    /**
     * Gets the nth note of the scale.
     * @param {integer} n Index of the note, 1 being root.
     * @returns {Note} The note
     */
    getNote(n) {
        if(n < 1 || n > this.definition.length) {
            throw "Note index " + n + " out of range.";
        }
        
        return this.root.getTransposition(this.definition[n-1]);
    }
    
    /**
     * Sets the definition of the scale.
     * @param {array} definition An array of intervals relative to the root. The first element should be 0 for root.
     */
    setDefinition(definition) {
        this.definition = definition;
    }
    
    /**
     * Sets the root note of the scale.
     * @param {Note} root The root of the scale.
     */
    setRoot(root) {
        this.root = root;
    }
    
    /**
     * Transposes the scale to the specified half steps.
     * @param {integer} halfSteps The amount of half steps to transpose to.
     */
    transpose(halfSteps) {
        this.root = this.root.transpose(halfSteps);
    }
    
    /**
     * Gets a new scale transposed to the specified half steps.
     * @param {integer} halfSteps The amount of half steps to transpose to.
     * @return {Scale} The transposed scale.
     */
    getTransposition(halfSteps) {
        var scale = new Scale();
        scale.setDefinition(this.definition);
        scale.setRoot(this.root.getTransposition(halfSteps));
        
        return scale;
    }
}

module.exports = Scale;