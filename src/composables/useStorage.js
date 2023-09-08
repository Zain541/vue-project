import { ref, watch } from 'vue';

export function useStorage(key, val = null) {
    let storedVal = read();

    //for arrays and objects use this
    //JSON.stringify(value) for storing
    //JSON.parse() for reading

    if(storedVal)
    {
        val = ref(storedVal);
    }
    else
    {
        val = ref(val);
        write();
    }

    watch (val, write, { deep: true }); //{ deep: true } deep just means go deep into that object and  see if any of the child properties change


    function read()
    {
        return JSON.parse(localStorage.getItem(key));
    }

    function write(){
        if(val.value === '' || val.value == null)
        {
            localStorage.removeItem(key);
        }
        else
        {
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    return val;
}