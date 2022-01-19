using Microsoft.AspNetCore.Mvc;
using Mission_1_Assignmetn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_1_Assignmetn.Controllers
{
    public class BlahController : Controller
    {
        //Returns index page view
        public IActionResult Index()
        {
            return View();
        }
        
        //Returns the calculator page view
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }
        
        //Allow access to the calculator model
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }

    }
}
