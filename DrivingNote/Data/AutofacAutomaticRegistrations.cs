namespace DrivingNote.Data
{
    using Autofac;
    using System.Linq;

    public class AutofacAutomaticRegistrations : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            var assemblies = AssemblyLoader.GetLoadedSimuAssemblies().ToArray();

            // Register all types implementing interfaces as their interface type(s)
            builder
              .RegisterAssemblyTypes(assemblies)
              .AsImplementedInterfaces()
              .InstancePerLifetimeScope();
        }
    }
}
