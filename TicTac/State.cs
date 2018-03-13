using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TicTac
{
    class State
    {
        private int mId;
        private Resource mResource;
        private int mCount;

        internal Resource Resource
        {
            get { return mResource; }
            set { mResource = value; }
        }

        public int Id
        {
            get { return mId; }
            set { mId = value; }
        }

        public int Count
        {
            get { return mCount; }
            set { mCount = value; }
        }
    }
}
