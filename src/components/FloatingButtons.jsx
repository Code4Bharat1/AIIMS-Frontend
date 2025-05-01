'use client';

const FloatingButtons = () => {
    return (
        <div className="fixed top-[50%] right-6 flex-col items-end space-y-3 z-50 lg:block hidden">
            <a
                href="https://wa.me/+919870780524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center active:scale-90"
            >
                <img src="/wsp.png" alt="" className='h-14 w-14 hover:scale-105'/>
            </a>
        </div>
    );
};

export default FloatingButtons;
