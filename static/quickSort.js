function quickSort(arr, head, tail) {
    let i = head, j = -1;
    let guard = arr[tail];
    if (head === tail) { 
        return; 
    }
    for (; i < tail; i++) {
        let p1 = arr[i];
        if(j < 0 && p1 > guard) {	
            j = i;
        } else if(j >= 0 && p1 <= guard) {
            swap(arr, j, i);
            j++;
        }
    }

    if(j >= 0) {
        swap(arr, j, tail);
        quickSort(arr, head, j);
        quickSort(arr, j+1, tail);
    } else {
        quickSort(arr, head, tail - 1);
    }
}

  function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }