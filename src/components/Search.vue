<template>
    <b-nav-form @submit.prevent>
        <b-form-input v-model="searchInput" v-on:change="search" v-on:keyup="search" v-on:keypress="search"
                      @submit="search"
                      v-on:keypress.enter="search"
                      size="sm" class="mr-sm-2" type="search" placeholder="Recherche"></b-form-input>
        <div class="autocomplete">
            <ul v-show="isOpen"
                class="autocomplete-results">
                <li v-for="result in  autocompleteList"

                    class="autocomplete-result">
                    {{ result }}
                </li>
            </ul>
        </div>
    </b-nav-form>

</template>

<script>
    //    import returnAutocomplete from "../searchtris"


    export default {
        name: "Search",
        data() {
            return {
                searchInput: '',
                isOpne: true,
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
                    wordToLetterArray: function (w) {
                        return w.split('')
                    },
                    goTo: function (o, wp) {
                        if (!wp.length) {
                            return o
                        }
                        var firstLetter = wp[0];
                        var point = o[firstLetter];
                        console.log("YA");
                        console.log(o);
                        return point ? this.goTo(point, this.tail(wp)) : {};
                    },
                    tail: function (arr) {
                        return arr.slice(1)
                    },
                    autoComplete(tree, wp) {
                        //console.log(wp);
                        var point = this.goTo(tree.tree, wp);
                        console.log("tree");
                        console.log(tree.tree);
                        console.log(point);
                        var stack = [];

                        function reduceObjToArr(o, trace) {
                            for (var k in o) {
                                if (o[k][Symbol.for('end')]) {
                                    stack.push(trace + k)
                                }
                                reduceObjToArr(o[k], trace + k)
                            }
                        }

                        reduceObjToArr(point, '')
                        return stack.map(function (e) {
                            return wp + e
                        });
                    }
                },
                autocompleteList: []
            }
        },
        created() {
            console.log("Loaded!");

            this.tree = this.createTrie();
            this.dict = [];
            this.add("Concordia, Canada", "canada", ["concordia", "canada", "montreal", "canadien"]);
            this.add("Cork, Irlande", "cork", ["cork", "irland", "ireland", "ir"]);

            console.log(this.dict);
            console.log(this.TrieProto);
            console.log(this.TrieDesc);
            console.log(this.tree);

            console.log("Starting...")
            console.log(this.returnAutocomplete('cork'));
            console.log(this.returnAutocomplete('cor'));

            console.log("Starting...")
            console.log(this.TrieProto.autoComplete(this.tree, "cor"));
        },
        methods: {

            createTrie: function () {
                return Object.create(this.TrieProto, this.TrieDesc);
            },
            add: function (name, id, id_aliases) {
                //console.log(id_aliases)
                for (var i = 0; i < id_aliases.length; i++) {
                    //console.log(id_aliases[i], name);
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
            },
            returnAutocomplete: function (input) {
                var t = this.TrieProto.autoComplete(this.tree, input);
                console.log("Improtat");
                console.log(t);
                for (var i = 0; i < t.length; i++) {
                    t[i] = this.returnName(t[i])
                }
                return [...new Set(t)];
            }

            ,
            search: function () {
                console.log(this.searchInput);
                this.autocompleteList = this.returnAutocomplete(this.searchInput)
                console.log(this.returnAutocomplete(this.searchInput))
            }
        }
    }
</script>

<style scoped>
    .autocomplete {
        position: relative;
        width: 150px;
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
        padding: 4px 2px;
        cursor: pointer;
    }

    .autocomplete-result:hover {
        background-color: #4AAE9B;
        color: white;
    }
    ul.bs-autocomplete-menu {
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

    ul.bs-autocomplete-menu a {
        font-weight: normal;
        color: #333333;
    }

    .ui-helper-hidden-accessible {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .ui-state-active,
    .ui-state-focus {
        color: #23527c;
        background-color: #eeeeee;
    }

    .bs-autocomplete-feedback {
        width: 1.5em;
        height: 1.5em;
        overflow: hidden;
        margin-top: .5em;
        margin-right: .5em;
    }
</style>