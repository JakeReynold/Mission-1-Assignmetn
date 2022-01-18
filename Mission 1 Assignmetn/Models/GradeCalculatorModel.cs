using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_1_Assignmetn.Models
{
    public class GradeCalculatorModel
    {
        [Range(0,100)]
        public int Assignments { get; set; }

        [Range(0, 100)]
        public int Projects { get; set; }

        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Range(0, 100)]
        public int Exams { get; set; }

        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
