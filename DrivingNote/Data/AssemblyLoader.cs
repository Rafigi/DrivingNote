namespace DrivingNote.Data
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Reflection;

    public class AssemblyLoader
    {
        public static void EnsureAllSimuAssembliesAreLoaded()
        {
            var directoryName = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ??
                                throw new ApplicationException("Unable to get location of current executing assembly.");
            EnsureAllAssembliesAreLoaded(directoryName, "DrivingNote*.dll");
        }

        public static void EnsureAllAssembliesAreLoaded(string directoryName, string assemblyFullNamePattern)
        {
            var worldAssemblyNames = Directory.GetFiles(directoryName, assemblyFullNamePattern);
            foreach (var assemblyName in worldAssemblyNames)
                Assembly.LoadFrom(assemblyName);
        }

        public static IEnumerable<Assembly> GetLoadedSimuAssemblies()
        {
            return AppDomain.CurrentDomain.GetAssemblies().Where(a => a.FullName.StartsWith("DrivingNote"));
        }
    }
}
