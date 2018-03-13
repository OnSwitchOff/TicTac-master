using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TicTac
{
    class Controller
    {
        public void launch(Object state)
        {
            int mId = ((State)state).Id;
            Resource mResource = ((State)state).Resource;
            int count = ((State)state).Count;

            lock (mResource)
            {
                for (int i = 0; i < count; i++)
                {
                    try
                    {
                        while (mId != mResource.getState())
                        {
                            Monitor.Wait(mResource);
                        }
                        if (mId == 1)
                        {
                            mResource.Tic();
                        }
                        else if (mId == 2)
                        {
                            mResource.Tak();
                        }
                        else
                        {
                            mResource.Tok();
                            Console.WriteLine(" : " + i);
                        }
                        Monitor.PulseAll(mResource);
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Some error!" + "Details:\n" + ex);
                    }
                }
            }
        }
    }
}
