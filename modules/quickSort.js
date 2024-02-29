


class SortableArray
{
  constructor(array)
  {
    this.array=array;
  }
  partition(left_pointer,right_pointer)
  {
    //will take pivot always as the right most index value
    const pivot_index=right_pointer;
    let pivot=this.array[pivot_index];
    //will make right pointer go off pivot
    right_pointer--;
    while (true)
    {
      //start moving left pointer until value is lower than pivot
      while(this.array[left_pointer]<pivot)
      {
        left_pointer++;
      }
      //start moving right pointer until value is higher than pivot
      while(this.array[right_pointer]>pivot)
      {
        right_pointer--;
      }
      //if they overcome each other or are equal go to next step
      if (left_pointer>=right_pointer)
      {
        break;
      }
      else
      {
        //if left pointer is still lower than right  we switch their places
        [this.array[left_pointer],this.array[right_pointer]]=[this.array[right_pointer],this.array[left_pointer]];
        left_pointer++;
      }
    }
  [this.array[left_pointer],this.array[pivot_index]]=[this.array[pivot_index],this.array[left_pointer]];
  return left_pointer
  }
  quicksort(left_index,right_index)
  {
    //basecase subarray has 0 or 1 element
    if (right_index-left_index<=0)
    {
      return ;
    }
    const pivot_index=this.partition(left_index,right_index);
    this.quicksort(left_index,pivot_index-1);
    this.quicksort(pivot_index+1,right_index);
  }
}

export { SortableArray };
