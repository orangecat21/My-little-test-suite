class TestSuite {
    constructor() {
        const result = document.createElement('ul');
        result.className = 'result';
        document.body.appendChild(result);

        this.assert = (value, descr) => {
            let li = document.createElement('li');
            li.className = value ? 'pass' : 'fail';
            li.innerText = descr;
            result.appendChild(li);
        }
    
        this.assert(false, `Check tester.`);
        this.assert(true, `Test suit is running.`);
    
    
    }
};

export default TestSuite;
