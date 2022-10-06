const textState = atom({
    key: 'openModel', // unique ID (with respect to other atoms/selectors)
    default:   typeof window !== 'undefined' ? localStorage.getItem('farmerId') : null 
  });
  