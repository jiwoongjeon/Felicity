
export const Increment = (i, isEmpty) => {

    isEmpty = true;
    i = 0;

    if (isEmpty == true){

    i += 1;
    isEmpty = false;
    return true;

    }

    else {
      i += 1;

      return true;
    }
    

}

export default Increment;