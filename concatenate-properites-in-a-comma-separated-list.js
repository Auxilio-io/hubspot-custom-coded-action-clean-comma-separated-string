exports.main = async (event, callback) => {

    const jobFunction = event.inputFields['job_function'];
    const zoomInfoJobFunction = event.inputFields['zoominfo_job_function'];
    const zoomInfoJobDepartment = event.inputFields['zoominfo_job_department'];
    const clearbitRole = event.inputFields['clearbit_person_employment_role'];
    
    const concatenatedArray = [jobFunction, zoomInfoJobFunction, zoomInfoJobDepartment, clearbitRole]
    
    const concatenatedList = concatenatedArray.join(',');
    
    console.log(concatenatedList)
  
    callback({
      outputFields: {
        concatenatedList: concatenatedList
      }
    });
  }