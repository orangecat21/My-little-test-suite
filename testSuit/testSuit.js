class TestSuite {
    constructor() {
        this.result = document.createElement('ul');
        this.result.className = 'result';
        document.body.appendChild(this.result);
        
        this.assert(false, `Check tester.`);
        this.assert(true, `Test suit is running.`);
    }

    assert = (value, descr) => {
        let li = document.createElement('li');
        li.className = value ? 'pass' : 'fail';
        li.innerText = descr;
        this.result.appendChild(li);
    }

    report = (msg) => {
        this.assert(true, msg);
    }
};

export default TestSuite;
