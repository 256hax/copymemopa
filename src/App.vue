<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-toolbar flat color="white">
          <v-toolbar-title>メモペ</v-toolbar-title>
          <v-spacer></v-spacer>

          <!-- Snackbar -->
          <v-snackbar
            v-model="snackbar"
            :multi-line="mode"
            :timeout="timeout"
            :top="y"
          >
            {{ text }}
            <v-btn
              color="blue"
              flat
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </v-snackbar>
          <!-- /Snackbar -->

          <!-- Search -->
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <!-- /Search -->

          <!-- 新規登録 -->
          <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" color="primary" dark class="mb-2">メモ追加</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.rowNo" label="#"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.columnA" label="A列"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.columnB" label="B列"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.columnC" label="C列"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.columnD" label="D列"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- /新規登録 -->

        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-right">{{ props.item.rowNo }}</td>
            <td class="text-xs">
              <v-btn
                flat small
                v-clipboard:copy="props.item.columnA"
                v-clipboard:success="onCopy"
              >
                {{ props.item.columnA }}
              </v-btn>
            </td>
            <td class="text-xs">
              <v-btn
                flat small
                v-clipboard:copy="props.item.columnB"
                v-clipboard:success="onCopy"
              >
                {{ props.item.columnB }}
              </v-btn>
            </td>
            <td class="text-xs">
              <v-btn
                flat small
                v-clipboard:copy="props.item.columnC"
                v-clipboard:success="onCopy"
              >
                {{ props.item.columnC }}
              </v-btn>
            </td>
            <td class="text-xs">
              <v-btn
                flat small
                v-clipboard:copy="props.item.columnD"
                v-clipboard:success="onCopy"
              >
                {{ props.item.columnD }}
              </v-btn>
            </td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td>
          </template>
          <template slot="no-data">
            <v-btn color="normal" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-app>
  </div>
</template>


<script>
export default {
  name: 'App',
  data: () => ({
    dialog: false,
    /*--- Search ---*/
    search: '',

    /*--- Items ---*/
    headers: [
      {
        text: '#',
        align: 'right',
        sortable: true,
        value: 'rowNo'
      },
      { text: 'A', value: 'columnA' },
      { text: 'B', value: 'columnB' },
      { text: 'C', value: 'columnC' },
      { text: 'D', value: 'columnD' },
      { text: 'アクション', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      rowNo: '',
      columnA: '',
      columnB: '',
      columnC: '',
      columnD: ''
    },
    defaultItem: {
      rowNo: '',
      columnA: '',
      columnB: '',
      columnC: '',
      columnD: ''
    },

    /*--- Snackbar ---*/
    snackbar: false,
    y: 'top',
    x: null,
    mode: false,
    timeout: 2000,
    text: 'コピーしました！'
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      var getLocalStorageItems =  localStorage.getItem('memo1'); // Load from Chrome localStorage. localStorage Key is fix value 'memo1'.
      if (getLocalStorageItems) {
        this.items = JSON.parse(getLocalStorageItems)
      } else {
        this.items = [
          {
            rowNo: '1',
            columnA: '入力した文字を',
            columnB: 'クリックすると',
            columnC: 'クリップボードに',
            columnD: 'コピーされます'
          },
          {
            rowNo: '2',
            columnA: '電車賃メモ',
            columnB: '恵比寿駅 ->',
            columnC: '銀座駅',
            columnD: '195円'
          },
          {
            rowNo: '3',
            columnA: 'URLメモ',
            columnB: 'https://google.com/',
            columnC: 'https://amazon.co.jp/',
            columnD: 'http://kakaku.com/'
          }
        ]
      }
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)

      this._saveToLocalStorage(this.items)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }

      this._saveToLocalStorage(this.items)
      this.close()
    },

    /*-------------------------------------
      Save to Chrome Local Storage
        @param items data
        @returns none
      -------------------------------------*/
    _saveToLocalStorage (thisItems) {
      var thisItemsJson = JSON.stringify(thisItems)
      localStorage.setItem('memo1', thisItemsJson) // Save to Chrome localStorage. localStorage Key is fix value 'memo1'.
    },

    /*--- Snackbar ---*/
    onCopy: function () {
      this.snackbar = true
    }
  }
}
</script>


<style>
* {
  text-transform: none !important;
  font-family: "Rounded Mplus 1p"; /* Google Japanese Fonts */
}
/*
body {
  min-width: 700px;
  min-height: 500px;
}
*/
</style>
