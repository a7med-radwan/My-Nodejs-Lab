const getProfile = (req, res, next)=>{
    const studentId = req.query.id;
//     get data
    res.json({
        status: 'true',
        data: {
            name: 'Ahmed',
            address: 'Gaza',
            gpa: '90'
        }
    });
}

const getGrade =(req, res, next)=>{
    const studentId = req.query.id;
    //     get data
    res.json({
        status: 'true',
        data: [
            {course_id :2, grade :90},
            {course_id :5, grade :80}

        ]
    });
}

const getTimetable = (req, res, next)=>{
    const studentId = req.query.id;
    //     get data
    res.json({
        status: 'true',
        data: [
            {course_id :1, time :"sat mon"},
            {course_id :11, time :"sat mon"}
        ]
    });
}

module.exports = {
    getProfile,
    getGrade,
    getTimetable
}