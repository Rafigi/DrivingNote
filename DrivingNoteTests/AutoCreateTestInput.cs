namespace DrivingNoteTests
{
    using AutoFixture;
    using AutoFixture.AutoFakeItEasy;
    using AutoFixture.NUnit3;
    using System.Linq;

    /// <inheritdoc />
    /// <summary>
    ///   <para>
    ///     When using this declaration and interfaces are injected. FakeItEasy is used to create fake instances of those
    ///     interfaces.
    ///   </para>
    ///   <para>When Class Types are used autofixture tries to instantiate these and fills them with values. </para>
    /// </summary>
    public class AutoCreateTestInput : AutoDataAttribute
    {
        public AutoCreateTestInput() : this(new Fixture())
        {
        }

        protected AutoCreateTestInput(IFixture fixture) : base(fixture.Customize(new AutoFakeItEasyCustomization()))
        {
            fixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList()
              .ForEach(b => fixture.Behaviors.Remove(b));
            fixture.Behaviors.Add(new OmitOnRecursionBehavior());
        }
    }
}
