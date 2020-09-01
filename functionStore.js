// Function Collection

const functionStore = {
    nextId: 1,
    cache: {},
    add: function(fn) {
        if (!fn.id || !this.cache[fn.id]) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
        return false;
    }
}

// ######### For testing #########
// function NinjaFunc(){}

// NinjaFunc.id = 100;

// assert(functionStore.add(NinjaFunc), 'Added succes!');
// assert(!functionStore.add(NinjaFunc), 'don`t added!');