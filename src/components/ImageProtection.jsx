import React, { useEffect } from 'react';

const ImageProtection = ({ children }) => {
    useEffect(() => {
        // Disable right-click context menu
        const handleContextMenu = (e) => {
            e.preventDefault();
            return false;
        };

        // Disable drag and drop
        const handleDragStart = (e) => {
            e.preventDefault();
            return false;
        };

        // Disable text selection
        const handleSelectStart = (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        };

        // Disable keyboard shortcuts for saving images
        const handleKeyDown = (e) => {
            // Disable Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, F12, Ctrl+Shift+I, Ctrl+U
            if (
                (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'c' || e.key === 'v' || e.key === 'x' || e.key === 'u')) ||
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J')
            ) {
                e.preventDefault();
                return false;
            }
        };

        // Disable print screen
        const handleKeyUp = (e) => {
            if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText('');
                alert('Screenshots are disabled for this content.');
            }
        };

        // Add event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('selectstart', handleSelectStart);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // Disable developer tools detection
        let devtools = {
            open: false,
            orientation: null
        };

        const threshold = 160;

        setInterval(() => {
            if (
                window.outerHeight - window.innerHeight > threshold ||
                window.outerWidth - window.innerWidth > threshold
            ) {
                if (!devtools.open) {
                    devtools.open = true;
                    console.clear();
                    console.log('%cDeveloper tools detected! Image protection is active.', 'color: red; font-size: 20px; font-weight: bold;');
                }
            } else {
                devtools.open = false;
            }
        }, 500);

        // Clear console periodically
        const clearConsole = () => {
            console.clear();
        };
        const consoleInterval = setInterval(clearConsole, 1000);

        // Cleanup function
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('selectstart', handleSelectStart);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            clearInterval(consoleInterval);
        };
    }, []);

    return (
        <div className="image-protection">
            {children}
        </div>
    );
};

export default ImageProtection;