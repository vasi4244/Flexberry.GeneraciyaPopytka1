﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Generaciya_popytka_1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "ID as \'ID\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "НомерПас as \'Номер паспорта\'",
            "СерияПас as \'Серия паспорта\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Наименование\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование\'",
            "Отделы as \'Отделы\'",
            "Отделы.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Организация.Наименование",
            "Должность.Наименование",
            "Отделы.Наименование"})]
    [MasterViewDefineAttribute("СотрудникиE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("СотрудникиE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("СотрудникиE", "Отделы", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникиL", new string[] {
            "Отчество as \'Отчество\'",
            "Имя as \'Имя\'",
            "ID as \'ID\'",
            "НомерПас as \'Номер пас\'",
            "СерияПас as \'Серия пас\'",
            "Фамилия as \'Фамилия\'",
            "Организация.Наименование as \'Наименование\'",
            "Должность.Наименование as \'Наименование\'",
            "Отделы.Наименование as \'Наименование\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private string fОтчество;
        
        private string fИмя;
        
        private int fID;
        
        private int fНомерПас;
        
        private int fСерияПас;
        
        private string fФамилия;
        
        private IIS.Generaciya_popytka_1.Организация fОрганизация;
        
        private IIS.Generaciya_popytka_1.Должность fДолжность;
        
        private IIS.Generaciya_popytka_1.Отделы fОтделы;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ID CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ID Get start)

                // *** End programmer edit section *** (Сотрудники.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Сотрудники.ID Get end)

                // *** End programmer edit section *** (Сотрудники.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ID Set start)

                // *** End programmer edit section *** (Сотрудники.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Сотрудники.ID Set end)

                // *** End programmer edit section *** (Сотрудники.ID Set end)
            }
        }
        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Имя CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Get start)

                // *** End programmer edit section *** (Сотрудники.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Сотрудники.Имя Get end)

                // *** End programmer edit section *** (Сотрудники.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Set start)

                // *** End programmer edit section *** (Сотрудники.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Сотрудники.Имя Set end)

                // *** End programmer edit section *** (Сотрудники.Имя Set end)
            }
        }
        
        /// <summary>
        /// НомерПас.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.НомерПас CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.НомерПас CustomAttributes)
        public virtual int НомерПас
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.НомерПас Get start)

                // *** End programmer edit section *** (Сотрудники.НомерПас Get start)
                int result = this.fНомерПас;
                // *** Start programmer edit section *** (Сотрудники.НомерПас Get end)

                // *** End programmer edit section *** (Сотрудники.НомерПас Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.НомерПас Set start)

                // *** End programmer edit section *** (Сотрудники.НомерПас Set start)
                this.fНомерПас = value;
                // *** Start programmer edit section *** (Сотрудники.НомерПас Set end)

                // *** End programmer edit section *** (Сотрудники.НомерПас Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Отчество CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Get start)

                // *** End programmer edit section *** (Сотрудники.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Сотрудники.Отчество Get end)

                // *** End programmer edit section *** (Сотрудники.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Set start)

                // *** End programmer edit section *** (Сотрудники.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Сотрудники.Отчество Set end)

                // *** End programmer edit section *** (Сотрудники.Отчество Set end)
            }
        }
        
        /// <summary>
        /// СерияПас.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.СерияПас CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.СерияПас CustomAttributes)
        public virtual int СерияПас
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.СерияПас Get start)

                // *** End programmer edit section *** (Сотрудники.СерияПас Get start)
                int result = this.fСерияПас;
                // *** Start programmer edit section *** (Сотрудники.СерияПас Get end)

                // *** End programmer edit section *** (Сотрудники.СерияПас Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.СерияПас Set start)

                // *** End programmer edit section *** (Сотрудники.СерияПас Set start)
                this.fСерияПас = value;
                // *** Start programmer edit section *** (Сотрудники.СерияПас Set end)

                // *** End programmer edit section *** (Сотрудники.СерияПас Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.Generaciya_popytka_1.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Get start)

                // *** End programmer edit section *** (Сотрудники.Должность Get start)
                IIS.Generaciya_popytka_1.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудники.Должность Get end)

                // *** End programmer edit section *** (Сотрудники.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Set start)

                // *** End programmer edit section *** (Сотрудники.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудники.Должность Set end)

                // *** End programmer edit section *** (Сотрудники.Должность Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Организация CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Generaciya_popytka_1.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Организация Get start)

                // *** End programmer edit section *** (Сотрудники.Организация Get start)
                IIS.Generaciya_popytka_1.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (Сотрудники.Организация Get end)

                // *** End programmer edit section *** (Сотрудники.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Организация Set start)

                // *** End programmer edit section *** (Сотрудники.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Сотрудники.Организация Set end)

                // *** End programmer edit section *** (Сотрудники.Организация Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Отделы CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Отделы CustomAttributes)
        [PropertyStorage(new string[] {
                "Отделы"})]
        [NotNull()]
        public virtual IIS.Generaciya_popytka_1.Отделы Отделы
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Отделы Get start)

                // *** End programmer edit section *** (Сотрудники.Отделы Get start)
                IIS.Generaciya_popytka_1.Отделы result = this.fОтделы;
                // *** Start programmer edit section *** (Сотрудники.Отделы Get end)

                // *** End programmer edit section *** (Сотрудники.Отделы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Отделы Set start)

                // *** End programmer edit section *** (Сотрудники.Отделы Set start)
                this.fОтделы = value;
                // *** Start programmer edit section *** (Сотрудники.Отделы Set end)

                // *** End programmer edit section *** (Сотрудники.Отделы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Generaciya_popytka_1.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Generaciya_popytka_1.Сотрудники));
                }
            }
        }
    }
}
