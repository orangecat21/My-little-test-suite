// Chapter 4
// Ex. 1
function sum(...args) {
    return args.reduce((accum, item) => accum + item, 0);
}

assert(sum(1,2,3,4) === 10, 'It`s works!!!')

// Ex. 4
const ninja1 = {
    context: function() {
        return this;
    },
};

const ninja2 = {
    context: ninja1.context,
}

let identify = ninja2.context;

report(`.`);
report("All compare with ninja1");
report('Call as...')

assert(ninja1.context() === ninja1, 'As method ninja1');
assert(ninja2.context() === ninja1, 'As method ninja2');

assert(identify() === ninja1, 'As variable');
assert(ninja1.context.call(ninja2) === ninja2, 'As call method with ninja2 arg');

report('........');

// Ex. 6
function Ninja() {
    this.context = function() {
        return this;
    }.bind(this);
}

let ninja1 = new Ninja();
let ninja2 = {
    context: ninja1.context
};

report('...');
report('Ex.6');
report('...');
assert(ninja1.context() === ninja1, 'It`s ninja1?');
assert(ninja2.context() === ninja2, 'It`s ninja2?');