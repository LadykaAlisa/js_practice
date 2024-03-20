function printIntervalRec (start, finish) {
    if (start>finish) {
        return;
    } else {
        console.log(start);
        printIntervalRec(start +1, finish);
    }
}

printIntervalRec (10, 15);


