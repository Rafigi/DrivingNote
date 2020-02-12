namespace DrivingNoteTests.HTML
{
    using AutoFixture.NUnit3;
    using DrivingNote.Factory;
    using DrivingNote.Models;
    using NUnit.Framework;

    public class TemplateGeneratorFactory_Test
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        [AutoCreateTestInput]
        public void GenerateHTML_createPdf_File(
            TemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsNotEmpty(_html);
        }


        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoName(
            TemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.Name = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }

        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoLastName(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.Name = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }

        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoEmail(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.Name = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }


        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoAccountNumber(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.Name = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }


        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoSport(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }

        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoStartAddress(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.TableInfomation[0].StartAddress = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }
        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoEndAddress(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.TableInfomation[0].EndAddress = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }

        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoStartAndEndAddress(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.TableInfomation[0].StartAddress = null;
            userInformation.TableInfomation[0].EndAddress = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }

        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoRoundTripAddress(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.TableInfomation[0].RoundTrip = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }

        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoDistance(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.TableInfomation[0].Distance = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }

        [Test]
        [AutoCreateTestInput]
        public void TryToGenerateHTML_WithNoDate(
            [Frozen]ITemplateGeneratorFactory templateGeneratorFactory,
            UserInformation userInformation)
        {
            //Arrange
            userInformation.TableInfomation[0].Date = null;
            var _html = templateGeneratorFactory.GetHTMLString(userInformation);

            //Act

            //Assert
            Assert.IsEmpty(_html);
        }
    }
}
