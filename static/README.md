This directory is for static resources. The content of it can be resolved
from the code using 'static' alias with webpack's help. For example:

    import baseStyles from 'static/styles/base.css';
    
Some of the files are to be placed into the 'build/' directory on building
(without 'static/' subdirectory, and just right into 'build/' as is).
