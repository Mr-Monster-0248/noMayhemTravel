<template>
    <b-nav-form @submit.prevent>
        <b-form-input @input="search" @submit="search" autocomplete="off" class="mr-sm-2"
                      placeholder="Recherche" size="sm"
                      type="search"
                      v-model="searchInput"
                      v-on:change="search" v-on:keypress="search" v-on:keypress.enter="search"
                      v-on:keyup="search"></b-form-input>
        <div class="autocomplete">
            <ul class="autocomplete-results"
                v-show="isOpen">
                <li @click="clickedResult(result[1])"
                    class="autocomplete-result"
                    v-for="result in autocompleteList">
                    {{ (result[0]) }}
                </li>
            </ul>
        </div>
    </b-nav-form>

</template>

<script>
    // TODO: Refactor the search. Not really pretty.
    // Lots of scope problems etc...
    // Too many loops, recursion
    // Vue component mixed with trie
    // My heads hurts

    import {EventBus} from './../event-bus.js';

    export default {
        name: "Search",
        data() {
            return {
                searchInput: '',
                isOpen: false,
                endSym: Symbol.for('end'),
                tree: Object,
                dict: [],
                TrieDesc: {
                    tree: {
                        value: {},
                        enumerable: true
                    }
                },
                TrieProto: {
                    endSym: this.endSym,
                    insert(word) {
                        var point = this.tree;

                        // Add each letter in the array
                        this.wordToLetterArray(word).forEach(function (e, i) {
                            if (!point[e]) {
                                point[e] = {};
                            }
                            point = point[e];
                            if (word.length - 1 === i) {
                                point[Symbol.for('end')] = true
                            }
                        });
                    },
                    wordToLetterArray: function (word) {
                        return word.split('')
                    },
                    goTo: function (o, wp) {
                        if (!wp.length) {
                            return o
                        }
                        var firstLetter = wp[0];
                        var point = o[firstLetter];
                        return point ? this.goTo(point, this.tail(wp)) : {};
                    },
                    tail: function (arr) {
                        return arr.slice(1)
                    },
                    autoComplete(tree, word_input) {
                        var point = this.goTo(tree.tree, word_input);
                        var stack = [];

                        function reduceObjToArr(obj, trace) {
                            for (var k in obj) {
                                if (obj[k][Symbol.for('end')]) {
                                    stack.push(trace + k)
                                }
                                reduceObjToArr(obj[k], trace + k)
                            }
                        }

                        reduceObjToArr(point, '');
                        return stack.map(function (e) {
                            return word_input + e
                        });
                    }
                },
                autocompleteList: []
            }
        },
        created() {
            this.tree = this.createTrie();
            this.dict = [];

            // TODO: Extract this kind of data from JSON files at build.

            this.add("Concordia, Canada", "concordia", ["*a", "concordia", "concordiaa", "canadaa", "montreala"]);
            this.add("Cork, Irlande", "cork", ["*b", "cork", "corkk", "irlandee", "irelandee", "ire"]);
            this.add("AGH, Pologne", "agh", ["*c", "agh", "aghh", "polognee", "cracoviee", "polo"]);
            this.add("CAPE, Afrique du Sud", "cape", ["*d", "cape", "capee", "afrique du sude", "cape towne", "afe"]);
            this.add("Coventry, Angleterre", "coventry", ["*e", "coventry", "coventryy", "angleterree", "ane"]);
            this.add("Curtin, Australie", "curtin", ["*f", "curtin", "curtine", "australiee", "ause", "perthe"]);
            this.add("Kaist, Corée du Sud", "kaist", ["*g", "kaist", "kaiste", "corée du sude", "coree", "coree du sude", "daejeonn"]);
            this.add("Asia-Pasific, Malaisie", "malaysia", ["*h", "malaysia", "apu", "apue", "mal", "malaisiee", "malaysiee", "asia-pacificc", "asia pacificc", "kuala lumpur"]);
            this.add("Manipal, Inde", "manipal", ["*i", "manipal", "indee", "manipale", "ind", "mani"]);
            this.add("Nanyang, Singapour", "nanyang", ["*j", "nanyang", "singapoure", "sing", "nanyange"]);
            this.add("Straffordshire, Angleterre", "straffordshire", ["*k", "straffordshire", "straffordshiree", "ang", "angleterreee", "stoke-on-trente", "stok", "stoke on trente"]);
            this.add("Stony brook, USA", "stonybrook", ["*l", "stonybrook", "stonybrooke", "usaa", "états uniss", "etats uniss", "etat uniss", "état unis", "stony brookk", "stonybrooke", "new yorkk", "newyorkk"]);
        },
        mounted() {
            document.addEventListener('click', this.handleClickOutside)
        },
        destroyed() {
            document.removeEventListener('click', this.handleClickOutside)
        },
        methods: {
            clickedResult(id) {
                EventBus.$emit('flyTo', id);
                this.isOpen = false;
            },
            handleClickOutside: function (evt) {
                if (!this.$el.contains(evt.target)) {
                    this.isOpen = false;
                }
            },
            createTrie: function () {
                return Object.create(this.TrieProto, this.TrieDesc);
            },
            add: function (name, id, id_aliases) {
                for (var i = 0; i < id_aliases.length; i++) {
                    this.addToDic(name, id, id_aliases[i]);
                    this.tree.insert(id_aliases[i]);
                }
            },
            addToDic: function (name, id, alias) {
                this.dict.push({
                    key: alias,
                    id: id,
                    name: name
                });
            },
            returnName: function (alias) {
                for (var i = 0; i < this.dict.length; i++) {
                    if (this.dict[i]["key"] == alias) {
                        return this.dict[i].name;
                    }
                }
            }, returnId: function (alias) {
                for (var i = 0; i < this.dict.length; i++) {
                    if (this.dict[i]["key"] == alias) {
                        return this.dict[i].id;
                    }
                }
            },
            returnAutocomplete: function (input) {
                var t = this.TrieProto.autoComplete(this.tree, input);

                for (i = 0; i < t.length; i++) {
                    t[i] = this.returnId(t[i])
                }
                t = [...new Set(t)];
                var v = [];
                for (var i = 0; i < t.length; i++) {
                    v[i] = [];
                    v[i][0] = this.returnName(t[i]);
                    v[i][1] = this.returnId(t[i])
                }
                return v;
            }

            ,
            search: function () {
                if (this.searchInput) {
                    this.isOpen = true;
                    this.autocompleteList = this.returnAutocomplete(this.searchInput.toLowerCase())
                }
            }
        }
    }
</script>

<style scoped>
    .autocomplete {
        position: absolute;
        margin-top: 17px;
        width: 175px;
    }

    .autocomplete-results {
        padding: 0;
        margin: 0;
        border: 1px solid #eeeeee;
        height: 120px;
        overflow: auto;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 200px;
        overflow: auto;
        z-index: 9999;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.4);
    }

    .autocomplete-result {
        list-style: none;
        text-align: left;
        padding: 4px 5px;
        cursor: pointer;
    }

    .autocomplete-result:hover {
        background-color: #A81A1A;
        color: white;
    }
</style>