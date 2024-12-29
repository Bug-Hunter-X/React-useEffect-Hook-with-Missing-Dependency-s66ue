useEffect(() => {
  // Incorrect logic that causes the bug
  if (someCondition) {
    fetchSomeData().then(data => setData(data));
  }
}, [someCondition]);

// The component re-renders unnecessarily because of the missing dependency