using ICSSoft.STORMNET;
using ICSSoft.STORMNET.Business;
using ICSSoft.STORMNET.Business.LINQProvider;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HSE.Timetable
{
    public class LessonBS: ICSSoft.STORMNET.Business.BusinessServer
    {
        public virtual DataObject[] OnUpdateLesson(Lesson updatedObject)
        {
            var коллизия = DataService.Query<Lesson>(Lesson.Views.LessonL)
                .Where(lesson =>
                    (lesson.Date.Date.Equals(updatedObject.Date.Date)
                    && (lesson.Beginning > updatedObject.Beginning && lesson.Ending < updatedObject.Beginning)
                    || (lesson.Beginning > updatedObject.Ending && lesson.Ending < updatedObject.Ending))
                    && (lesson.Room == updatedObject.Room || lesson.StudentGroup == updatedObject.StudentGroup))
                .FirstOrDefault();

            if (коллизия != null)
            {
                throw new Exception($"Обнаружена коллизия, в это время уже проводится занятие c {коллизия.Beginning:00.00} до {коллизия.Ending:00.00} для группы {коллизия.StudentGroup.Name} в аудитории {коллизия.Room.Number}");
            }

            return new DataObject[0];
        }
    }
}
