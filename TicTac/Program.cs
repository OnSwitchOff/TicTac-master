using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TicTac
{
    class Program
    {
        static void Main(string[] args)
        {
            Resource resource = new Resource();

            ParameterizedThreadStart pThreadStart =
                new ParameterizedThreadStart(new Controller().launch);
            
            Thread thread1 = new Thread(pThreadStart);
            Thread thread2 = new Thread(pThreadStart);
            Thread thread3 = new Thread(pThreadStart);

            State state1 = new State();
            State state2 = new State();
            State state3 = new State();

            state1.Id = 1;
            state1.Resource = resource;
            state1.Count = 30;

            state2.Id = 2;
            state2.Resource = resource;
            state2.Count = 30;

            state3.Id = 3;
            state3.Resource = resource;
            state3.Count = 30;

            thread2.Start(state2);
            thread3.Start(state3);
            thread1.Start(state1);
            
        }
    }
}
