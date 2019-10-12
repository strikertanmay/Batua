import glob
import os

# https://stackoverflow.com/questions/1057431/how-to-load-all-modules-in-a-folder
__all__ = [os.path.basename(f)[:-3] for f in glob.glob(os.path.dirname(__file__) + "/*.py")]
