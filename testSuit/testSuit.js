document.addEventListener('DOMContentLoaded', () => {
    const result = document.createElement('ul');
    document.body.appendChild(result);

    assert(true, `Test suit is running.`);
    assert(false, `Check tester.`);


    function assert(value, descr) {
        let li = document.createElement('li');
        li.className = value ? 'pass' : 'fail';
        li.innerText = descr;
        result.appendChild(li);
    }
});
