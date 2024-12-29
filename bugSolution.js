useEffect(() => {
  // Correct logic with added dependency
  if (someCondition) {
    fetchSomeData().then(data => setData(data));
  }
}, [someCondition, fetchSomeData]);

// The component now re-renders only when someCondition or fetchSomeData changes